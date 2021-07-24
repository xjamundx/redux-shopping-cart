## Using the Response from an Async Thunk to Update the Redux State

Any data coming back from our thunk's payloadCreator function is returned in the action payload. Here we'll look at the builder case for `checkoutCart.fulfilled` and type the action with `PayloadAction<{ success: boolean }>` and then update the global state based on that payload response.
