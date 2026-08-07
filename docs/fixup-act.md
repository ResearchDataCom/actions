% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with fixup-act/action.yaml.

# fixup-act

> Fix workflows run via act.

Work around the limitations of or workflow compatibility issues with
[act](https://nektosact.com/), a local GitHub Actions runner.  Guard
invocations with `if: ${{ env.ACT }}`.
