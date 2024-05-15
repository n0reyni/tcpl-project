// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import login from './pages/Login'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Medecines from './pages/Medecines'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/auth/login" page={login} name="login" />
      <Route path="/auth/sign-up" page={Signup} name="sign-up" />
      <Route path="/contact" page={Contact} name="contact" />
      <Route path="/medicament" page={Medecines} name="medecines" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
