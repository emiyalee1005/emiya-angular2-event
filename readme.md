0#Emiya Angular2 Event

##How to install
```
npm install --save emiya-angular2-event
```

##Usage
```
import {Event} from 'emiya-angular2-event';

export class MyApp {

constructor() {
    //emit videoPlaying event
    let videoEvent=Event.emit('videoPlaying',{//message});
    
    //check if the event is prevented
    if(!videoEvent.defaultPrevented)
      playVideo()
    else{
     //do nothing
    }

    //subscribe videoPlaying event
    let videoListenr=Event.subscribe('videoPlaying',(ev,data)=>{//do something like ev.preventDefault()})
    
    //unsubscribe videoPlaying event
    videoListenr.unsubscribe()
  }
}
```

##### event parameters

* ev
```
preventDefault():prevent the operation
stopPropagation()：stop the event to propagate
defaultPrevented：default is false,preventDefault() will set it to true
propagationPrevented：default is false,stopPropagation() will set it to true
```

* data
```
the second param you pass when emit an event
```

### Api Referrences(todo..)


