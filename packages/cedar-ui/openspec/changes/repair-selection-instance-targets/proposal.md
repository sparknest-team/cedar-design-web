# Connect Select/PeopleSelect methods to actual current focus targets

Select's open deferred editor has no outer fieldRef, so blur currently does nothing. PeopleSelect's legacy native Select renderer does not expose its ref, so public focus/blur exist but do nothing even in direct mode. Preserve Select closed-reference focus, route open blur through the active editor, and connect PeopleSelect's actual Select ref and existing wrapper focus/blur capabilities. Align existing public instance types with real methods. No new model event, approval entry or loading prop.
