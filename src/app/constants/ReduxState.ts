export enum ReduxStateType {
  idle = "idle",
  pending = "pending",
  fulfilled = "fulfilled",
  rejected = "rejected",
}

export const REDUX_STATE = {
  idle: ReduxStateType.idle,
  pending: ReduxStateType.pending,
  fulfilled: ReduxStateType.fulfilled,
  rejected: ReduxStateType.rejected,
};
