# Name the editing mode explicitly

Add editMode to Form, FormItem and editable fields. direct replaces inline in the new API; popup, click and dblclick retain their existing platform behavior. The user explicitly chose to preserve Cedar editing overlays near the field rather than replacing controls in place. readPretty remains an independent boolean. layout=inline is unchanged.

The user confirmed there are no consumers and explicitly requested no compatibility layer. Remove the old editing presentation prop, editing inline value, legacy type aliases and normalization code immediately. All authored demos and tests use editMode; native picker presentation and layout=inline remain separate APIs.
