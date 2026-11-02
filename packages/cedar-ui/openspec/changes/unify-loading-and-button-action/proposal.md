# Shared loading and standard Button events

## Why
Button notification handlers should use Vue event semantics. Input and Select need visible loading demos on their own pages, in addition to the shared FieldDecorator demo.

## Changes
- Button and SplitButton emit click normally and do not consume listener return values. Remove the previously introduced action API; do not restore autoLoading.
- Business callers own loading and error cleanup. PeopleSelect keeps its dedicated call/chat callback waiting state locally.
- FieldDecorator owns default/line field loading. Input/Select demos appear in their own Chinese/English docs and Maple phone entry.

## Decision
Vue emit returns void. Async handlers are valid; implicit Promise waiting is not provided by emit. Varlet provides autoLoading as an explicit library extension; this library chooses controlled loading for its base Button.
