import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import Spovent from  '../imports/ui/spovent';

Meteor.startup(() => {
    render (<Spovent/>,document.getElementById("root"));
});

