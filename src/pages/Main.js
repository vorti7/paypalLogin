import React from 'react';

async function _onApprove(data, actions) {
    let order = await actions.order.capture();
    console.log(order);
    return order;
}

function _onError(err) {
    console.log(err);
}

const Main = () => {

    const LoginBtn = window.paypal.use( ['login'], function (login) {
      login.render ({
        "appid":"AbqdO1XeqyneV7APsId_DjVsMR0TRbSZFVeU1UBBmFTmB_ffVVqDnkEMeWpjb4Gw6Q4ODMnClL3AEo_k",
        "authend":"sandbox",
        "scopes":"openid",
        "containerid":"lippButton",
        "responseType":"code id_Token",
        "locale":"ko-kr",
        "buttonType":"LWP",
        "buttonShape":"pill",
        "buttonSize":"lg",
        "fullPage":"true",
        "returnurl":"https://dk-firebase-225f7.web.app/payresult"
        // "returnurl":"https://travut.com"
      })
    });
  

    return (
        <div>
            <LoginBtn
                onApprove={(data, actions) => _onApprove(data, actions)}
                onError={(err) => _onError(err)}
            />
        </div>
    );
};

export default Main;
