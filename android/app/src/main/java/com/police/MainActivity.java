package com.police;

import com.facebook.react.ReactActivity;

import android.os.Bundle;



import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import android.widget.ImageView;


public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RCTSplashScreen.openSplashScreen(this);
        super.onCreate(savedInstanceState);

    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "police";
    }
}
