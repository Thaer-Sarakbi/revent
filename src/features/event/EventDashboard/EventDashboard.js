import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import { connect } from 'react-redux'
import {createEvent, updateEvent, deleteEvent} from '../eventActions'

class EventDashboard extends Component {
    
    handleCreateFormOpen = () => {
      this.setState({
        isOpen: true,
        selectedEvent: null
      })
    }
    
    /*
    handleFormCancel = () => {
      this.setState({
        isOpen: false
      })
    }
    */
    /*
    handleCreateEvent = (newEvent) => {
      newEvent.id = Math.random()
      newEvent.hostPhotoURL = '/assets/user.png'
      this.props.createEvent(newEvent)
    }
    */
    /*
    handleSelectEvent = (evt, event) => {
      //console.log(evt)
      //console.log(event)
      this.setState({
        selectedEvent: event,
        isOpen: true
      })
    }
    */
    /*
    handleUpdateEvent = (updatedEvent) => {
      this.props.updateEvent(updatedEvent)
    }
    */
   
    handleDeleteEvent = (id) => {
      /*
      this.setState(({events}) => ({
        events: events.filter(e => e.id !== id)
      }))
      */
     this.props.deleteEvent(id)
    }

    render() {
        //const { isOpen, selectedEvent} = this.state
        const {events} = this.props
        return (
            <Grid>
               <Grid.Column width={10}>
                 <EventList 
                   events={events} 
                   deleteEvent={this.handleDeleteEvent}/>
               </Grid.Column>
               <Grid.Column width={6}>
                 <h2>Activity Feed</h2>
               </Grid.Column>
            </Grid>
        )
    }
}

const mapState = (state) => ({
  events: state.events
})

export default connect(mapState, {createEvent, updateEvent, deleteEvent})(EventDashboard)