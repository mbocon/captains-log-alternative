const { json } = require("express");
const express = require("express");
const Log = require("../models/Log");

let index = (req, res) => {
    Log.find(({}), (err, logs)=>{
        if(err){
            return json(err);
        }

        res.render("index.ejs", {logs});
    })
}
let newLog = (req, res) => {
    res.render("new.ejs");
}
let create = (req, res) => {
    if(req.body.shipIsBroken == "on"){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }
    Log.create(req.body);
    res.redirect("/logs")
}
let show = (req, res) => {
    Log.findById(req.params.id, (err, log) =>{
        console.log(log);
        if(err){
            return json(err);
        }
        res.render("show.ejs", {log});
    })
}
let edit = (req, res) => {
    let id = req.params.id;
    res.render("edit.ejs", {id})
}
let update = (req, res) => {
    if(req.body.shipIsBroken == "on"){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, log)=>{
        if(err){
            return json(err)
        }
        res.redirect(`/logs/${log._id}`);
    })
}
let destroy = (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, log)=>{
        if(err){
            return json(err);
        }
        res.redirect("/logs/");
    })
}

module.exports = {
    index,
    newLog,
    create,
    show,
    edit,
    update,
    destroy
}
