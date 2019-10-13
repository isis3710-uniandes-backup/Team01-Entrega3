import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import MainPage from  '../imports/ui/mainpage';

Meteor.startup(() => {
    render (<MainPage/>,document.getElementById("root"));
});

