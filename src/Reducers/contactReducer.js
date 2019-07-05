var contacts=[
    {   _id:'1',
        name:'ammar',
        phone:'2323',
        email:'ammar@gmail.com'
    },
    {   _id:'2',
        name:'hedi',
        phone:'000000',
        email:'hedi@gmail.com'
    }
]

const contactReducer=(state=contacts,action)=>
{
  switch(action.type)
  {
      case 'ADD_CONTACT' :
      return (
          state.concat(action.newcontact)
      )

      case 'EDIT_CONTACT':
      return (
          state.map(el=>el._id===action.editcontact._id? el=action.editcontact:el)
      )
      case 'REMOVE_CONTACT':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_CONTACTS':
      return(
          state=action.contacts
      )
      default :
      return state
  }
}
export default contactReducer