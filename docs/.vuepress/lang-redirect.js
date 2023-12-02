/* Copyright (C) 2023 The C++ Plus Project
   This file is part of the cppp-platform library.

   The cppp-platform library is free software; you can redistribute it
   and/or modify it under the terms of the The Unlicense as published
   by the unlicense.org

   The cppp-platform library is distributed in the hope that it will be
   useful, but WITHOUT ANY WARRANTY; without even the implied warranty
   of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the The
   Unlicense for more details.

   You should have received a copy of the The Unlicense along with the
   cppp-platform library; see the file COPYING.
   If not, see <http://unlicense.org/>.  */

const script = 
`
function isLocale(str) {
    regex = /^[a-z]{2,3}(_[a-z]{2,3}){1,2}$/;
    return regex.test(str.toLowerCase());
}

const defaultLocale = 'en_US';
const locale = window.navigator.language.replace(/-/, '_');
const path = window.location.pathname;
const currentLocale = path.split('/')[1];

if (!isLocale(currentLocale)) {
    console.log('Invalid locale: ' + currentLocale);
    window.location.pathname = '/' + defaultLocale + path;
}
`;

module.exports = {
    script: script
}