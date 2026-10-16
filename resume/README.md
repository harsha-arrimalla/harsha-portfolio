# Résumé

Generated, not hand-laid-out — so it stays in sync with the site's design
system. Same typefaces as the portfolio (Archivo instanced to the expanded
weights, Instrument Sans, IBM Plex Mono), same electric-blue accent and
signal-orange metrics, same `[01]`-style numbered sections under hairline
rules.

```bash
python3 -m venv .venv
./.venv/bin/pip install reportlab
./.venv/bin/python build_resume.py      # writes resume.pdf
```

Edit the content arrays in `build_resume.py`. The script prints the final
`bottom y` — keep it above ~34 and the résumé stays on one page.

`fonts/` holds static instances cut from the Google Fonts variable files
(Archivo at wdth 122/114, Instrument Sans at wght 400/600) because reportlab
cannot read variable axes. Regenerate them with fontTools' `instancer` if you
change weights. All fonts are SIL OFL.
