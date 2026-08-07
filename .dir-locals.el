;;; Directory local variables; cf. (info "(emacs) Directory Variables")
;;;
;;; This work is marked CC0 1.0 Universal.  To view a copy of this
;;; mark, visit https://creativecommons.org/publicdomain/zero/1.0/.

((nil . ((eval . (progn
                   ;; Install or activate the development environment
                   ;; (requires pyvenv-tracking-mode).
                   (set (make-local-variable 'my-project)
                        (locate-dominating-file default-directory ".dir-locals.el"))
                   (set (make-local-variable 'my-project-venv)
                        (concat my-project ".venv"))
                   (if (not (file-exists-p my-project-venv))
                       (let ((cwd default-directory)
                             (cmd "make setup"))
                         (cd my-project)
                         (async-shell-command cmd)
                         (cd cwd)
                         (message
                          (format "Please re-open this file/directory after the \"%s\" command finishes." cmd)))
                     ;; This must be set project-wide for pre-commit
                     ;; to work.
                     (set (make-local-variable 'pyvenv-activate)
                          my-project-venv))))))
 (python-mode . ((eval . (progn
                           ;; Sort imports before styling code.
                           (add-hook 'before-save-hook #'py-isort-before-save nil t)
                           (add-hook 'before-save-hook #'elpy-black-fix-code nil t))))))

;;; Local Variables:
;;; mode: emacs-lisp
;;; no-byte-compile: t
;;; End:
