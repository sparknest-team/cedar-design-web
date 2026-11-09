# Remove accidental Form edit descriptor props

Cedar Form and FormItem accidentally declare fieldEditModeProp as a runtime prop in addition to editMode. It is unused and misleading. Delete that pre-release accidental API without an alias; retain the descriptor import used by editMode. Maple already exposes only editMode/readPretty. Verify root and component entry types on both ends and register the consumer fixtures in the mandatory typecheck config.
