#!/usr/bin/env bash
set -Eeuo pipefail

# TODO: This runs from the root of the container image template;
# GITHUB_ACTION_PATH?

# TODO: Set BASHBREW_NAMESPACE in the caller?

# TODO: Set BASHBREW_ARCH in the caller?

# Find the supplementary files provided alongside this script.
base="$(readlink -f "${BASH_SOURCE[0]}")"

# Determine the image name based the repository name.  Strip the
# leading account or organization name(s) and the "-docker" suffix.
image="${GITHUB_REPOSITORY##*/}"
image="${image%-docker}"

# Make sure the library entry generator exists and is executable.
GENERATE_STACKBREW_LIBRARY="${GENERATE_STACKBREW_LIBRARY:-./generate-stackbrew-library.sh}"
[ -x "${GENERATE_STACKBREW_LIBRARY}" ]

# Create a mock library, but wait to export this as BASHBREW_LIBRARY
# in case the library entry generator uses that to change its
# behavior;
# cf. https://github.com/docker-library/buildpack-deps/commit/cc2dc88e04e82cb4c4c2091205d888a5d5b386f3.
tmp="$(mktemp -d)"
trap "$(printf 'rm -rf %q' "$tmp")" EXIT
mkdir "$tmp/library"
eval "${GENERATE_STACKBREW_LIBRARY}" > "$tmp/library/$image"
export BASHBREW_LIBRARY="$tmp/library"

# If bashbrew cannot fetch the listed commits, they might live on a PR
# branch or in a private repository.  Force them into the bashbrew
# cache directly from here.
if ! bashbrew fetch "$image" &> /dev/null; then
    git_cache="$(bashbrew cat --format '{{ gitCache }}' "$image")"
    git -C "$git_cache" fetch --quiet --update-shallow "$PWD" HEAD > /dev/null
    bashbrew fetch "$image" > /dev/null
fi

# Generate jobs for each unique registry/namespace/image:tag, e.g.,
# ghcr.io/octocat/hello-world:2.1.3.
tags="$(bashbrew list --build-order --uniq "$image")"
order=()
declare -A metas=()
for tag in $tags; do
    echo Processing $tag >&2

    # Strip the registry/namespace, yielding image:tag, e.g.,
    # hello-world:2.1.3.
    bashbrew_image="${tag##*/}"

    meta="$(
        bashbrew cat --format-file "$base/generate-meta.gotmpl" "$bashbrew_image" \
            | jq -c -f "$base/generate-meta.jq"
    )"
done
