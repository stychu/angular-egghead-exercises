Feature: ng-repeat-start

  Scenario: On application start
    When I browse to the "/"
    Then I should see "ngRepeatStart"
    Then I should see "ngRepeat"
    Then I should see "ngRepeatEnd"

  Scenario: ng-repeat-start
    When I browse to the "/"
    Then I should see "1. Austin" for "1" in "people"
    Then I should see "2. Ben" for "2" in "people"
    Then I should see "3. Willy" for "3" in "people"
    Then I should see "4. Maxine" for "4" in "people"

  Scenario: ng-repeat
    When I browse to the "/"
    Then I should see "banana x 4" for "1" in "food"
    Then I should see "ham x 1" for "2" in "food"
    Then I should see "tomato x 1" for "3" in "food"
    Then I should see "banana x 4" for "4" in "food"
    Then I should see "wasabi x 2" for "5" in "food"
    Then I should see "ham x 1" for "6" in "food"
    Then I should see "cheese x 2" for "7" in "food"
    Then I should see "milk x 10" for "8" in "food"
    Then I should see "tomato x 1" for "9" in "food"
    Then I should see "milk x 3" for "10" in "food"
    Then I should see "butter x 2" for "11" in "food"
