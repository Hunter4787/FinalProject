var users=[
    {   _id:'1',
        name:'yosra',
        phone:'2323232323',
        email:'yosra@gmail.com'
    },
    {   _id:'2',
        name:'ness',
        phone:'000000',
        email:'nessrine@gmail.com'
    }
]

const userReducer=(state=users,action)=>
{
  switch(action.type)
  {
      case 'ADD_CONTACT' :
      return (
          state.concat(action.newuser)
      )

      case 'EDIT_USER':
      return (
          state.map(el=>el._id===action.edituser._id? el=action.edituser:el)
      )
      case 'REMOVE_USER':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_USER':
      return(
          state=action.users
      )
      default :
      return state
  }
}
export default userReducer