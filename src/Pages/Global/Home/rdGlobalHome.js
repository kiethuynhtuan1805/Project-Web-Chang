import actUser from "../../../Redux/Action/actUser"

export const mapStateToProps = (globalState) => {
    return {
        userState: globalState.userManage
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        GetUser: () => {
            dispatch({
                type: actUser.GET_USER
            })
        }
    }
}