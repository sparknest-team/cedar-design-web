# Preserve composition buffer ownership and dynamic Textarea policy

Share a private composition revision capture guard across Input, Textarea and InputNumber. Only the current edit may restore its native buffer/caret, and active composition renders its native value. Preserve duplicate post-composition suppression and numeric/text commit protocols. Textarea passes a reactive prop view to useInputValue so empty policies stay current. No public API addition or event-return task behavior.
