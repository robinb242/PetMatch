# Project Planning Information

## Team Heroku dashboard
* https://dashboard.heroku.com/teams/dream-team/overview

## Project Plan/Proposal
* https://docs.google.com/document/d/1UelUbeVC4njGvu5u96L1PSW4iboyP3M2hcSumqO5JMk/edit

## Project requirements
* https://drive.google.com/open?id=1FwtjOUDmHPothQzMbqcVFxMssJje15VCrFa4L_EdM3E

## Tasks
* Trello: https://trello.com/b/VZtg0AKd/task-board

## Story curation (feature/requirements list)
* Trello: https://trello.com/b/PmnAEQCY/story-curation
	* Add features here so that the team can track them.
	* Move feature to Done when feature is tested and complete.

## Compatibility quiz questions
* https://docs.google.com/document/d/1Mt60SJANtHSA12bLsydXwkYACuC0Fw9KfRVEErU-7yc/edit?usp=sharing

## Git help
* When you start coding
<pre>git checkout -b branch_name --track origin/master</pre>

* When you are ready to commit your changes:
	* <pre>git add .</pre>
	* <pre>git commit -m "Your message about your changes here."</pre>
	* <pre>git push origin branch_name:pr_name</pre>
	* Go to github.com > branches > Create Pull Request
	* Merge pull request.
* Keep working
	* <pre>git remote update</pre>
		* This pulls down the PR that was just merged, that happened on Github, not on your laptop.
	* <pre>git pull origin master</pre>


## Best time to meet outside of class
* Weekdays after 5 p.m.
* Meeting place: Robin’s house

## About the Petfinder API
* https://www.petfinder.com/developers/api-docs
* https://github.com/helenuria/Petfinder-API

### Getting started 
<p>To run one of the tests locally on your computer, perform the following steps</p>

1. Change directory to the project root directory (PetMatch).

2. Run the following command to make sure you have the testing dependencies (nightmare and mocha) available locally:
<pre>npm install</pre>

3. Start the server.
<pre>nodemon server.js</pre>
<p>If you don't have nodemon installed, you can also start the server using node:</p>
<pre>node server.js</pre>

### Troubleshooting
* If a test does not pass...
	* Open the test script and ensure that the test is accurately described and up-to-date.
	* Ensure that the server is running.
	* File a GitHub issue if root cause cannot be determined.

### Loading a page
The app consists of several pages. Here's how you can test that these pages load successfully.

1. Run the following command from the project root directory (PetMatch):
<pre>npm test ./ui-testing/load-page-test.js</pre>

2. Verify that all checks pass.
If all checks pass, all pages load without error.

### Taking the pet compatibility quiz
<p>STORY: As a user, I want to be able to take a quiz that matches me up with a pet based on my interests, personality, and preferences. The quiz should return the results.</p>

<p>Here's how you can test this story:</p>

1. Run the following command from the project root directory (PetMatch):
<pre>npm test ./ui-testing/nightmare/take-quiz-test.js</pre>
<p>An Electron browser window will open and take you through the pet compatibility quiz workflow.</p>

2. Verify that there are no errors and the quiz results modal opens.
