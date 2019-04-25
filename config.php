<?php

//Seeting Output Buffer
    ob_start();

//Eroor Handling
    ini_set('display_errors',1);
    error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT);

//Turn Off Register Globals
    ini_set('register_globals',0);

//Define App Constants
    define('App_path', realpath(dirname(__FILE__)));
    echo App_path;

//End The Buffer And Send The Output
    ob_flush();