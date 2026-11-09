# Balance canceled Slider pointer sessions

End every started pointer gesture exactly once across cancellation and lifecycle cleanup. Preserve its last proposal or original value/shape, do not add a model update or rollback, and keep ordinary event Promises independent.
