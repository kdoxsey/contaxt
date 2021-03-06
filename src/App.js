import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import ContactIndex from './components/Contact/ContactIndex'
import ContactCreate from './components/Contact/ContactCreate'
import ContactShow from './components/Contact/ContactShow'
import ContactUpdate from './components/Contact/ContactUpdate'
import Landing from './components/Landing/Landing'
import NationalParks from './components/NationalParks/NationalParks'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
      // contacts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  // setContacts = () => this.setContacts({ contacts: this.contacts })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main>
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route exact path='/' component={Landing} />

          <AuthenticatedRoute user={user} path='/contacts/:contactId' render={({ match }) => (
            <ContactShow msgAlert={this.msgAlert} user={user} match={match}/>
          )} />

          <AuthenticatedRoute user={user} exact path='/contacts' render={() => (
            <ContactIndex msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} exact path='/national-parks' render={() => (
            <NationalParks msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/contact-update/:contactId' render={({ match, history }) => (
            <ContactUpdate msgAlert={this.msgAlert} user={user} match={match} history={history} />
          )} />

          {/* <AuthenticatedRoute user={user} path='/' component={ContactMap}/> */}

          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} path='/create-contact' render={({ match }) => (
            <ContactCreate msgAlert={this.msgAlert} match={match} user={user} />
          )} />

        </main>
      </Fragment>
    )
  }
}

export default App
