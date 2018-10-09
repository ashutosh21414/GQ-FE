
'use strict';

import gql from 'graphql-tag';

export const Login = gql`{
    loginCheck(email:"infoashutoshsingh@gmail.com",password:"123123"){
       name
    }
  }`;