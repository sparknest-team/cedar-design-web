# Wire existing pending state into field loading

Both InputNumber implementations merge beforeCommit pending with manual loading at the FieldDecorator and native input. Cedar Mention merges its explicit data-source loading and manual loading for both input and textarea. Existing notification Promises remain unrelated to loading.
