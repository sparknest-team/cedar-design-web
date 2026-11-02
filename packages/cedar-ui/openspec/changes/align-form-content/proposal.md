# Uniform form content alignment

Inline controls, presentation references and readPretty currently choose alignment independently. Add content-align to Form and FormItem in Cedar and Maple so changing field presentation preserves the chosen direction.

The shared API accepts left, center and right, defaults to left, and lets FormItem override Form. Label alignment remains independent. Compact controls are positioned within the content row; text fields and displayed values use the corresponding text alignment. Explicit field text-align overrides inheritance. Popup editor chrome and helper/error messages retain their own alignment.

The Maple layout comparison exposes these values alongside inline, popup and readPretty modes. Existing readPretty remains a boolean API; only the demo mode label changes from read to readPretty.
