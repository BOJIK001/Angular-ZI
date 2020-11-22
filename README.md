Question
# Scenario #
* Consider the following template in our AppComponent:

    <p>Hi, I'm some text <span [appPopup]="imPopup">with a cool popup</span> that displays
     when hovering some text.</p>

    <ng-template #imPopup>
        <p>COOL POPUP</p>
    </ng-template>

# Requirement #
* You have to implement the appPopup directive.
* The directive should create a "popup" from the directive input.
* "popup" should be positioned on the directive location in the HTML.