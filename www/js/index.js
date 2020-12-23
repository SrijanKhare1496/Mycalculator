/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready,

document.addEventListener('deviceready', onDeviceReady, false);



function onDeviceReady() {

document.getElementById('addnum').addEventListener('click',sum);
    function sum()
    {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
        var c = 0; 
        c = Number(a) + Number(b);
        document.getElementById('result1').innerHTML= "Addition: "+c;
    }

document.getElementById('subnum').addEventListener('click',sub);
    function sub()
    {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
        var c = 0; 
        c = Number(a) - Number(b);
        document.getElementById('result1').innerHTML="Subtraction: "+c;
    }

document.getElementById('multinum').addEventListener('click',multi);
    function multi()
    {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
        var c = 0; 
        c = Number(a) *  Number(b);
        document.getElementById('result1').innerHTML="Multiplication: "+c;
    }

document.getElementById('divnum').addEventListener('click',div);
    function div()
    {
        var a = document.getElementById('number1').value;
        var b = document.getElementById('number2').value;
        var c = 0; 
        c = Number(a) / Number(b);
        document.getElementById('result1').innerHTML="Division: "+c;
    }    

}

