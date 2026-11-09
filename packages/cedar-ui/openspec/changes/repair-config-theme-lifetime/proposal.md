# Restore owned ConfigProvider document themes

Preserve the existing document-wide theme prop independently of the injection global flag. Track active explicit themes per rendered ownerDocument, with stable creation priority and exact prior-attribute restoration. Do not introduce scoped theme CSS or a new prop. Maple has no ConfigProvider counterpart.
