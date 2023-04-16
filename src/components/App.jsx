import React, { Component } from 'react';
import Section from './section';
import Statistics from './statistics';
import FeedbackOptions from './feedback-options';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateStatistics = event => {
    const feedbackType = event.target.textContent.toLowerCase();
    this.setState(state => ({
      [feedbackType]: state[feedbackType] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / this.countTotalFeedback();
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.updateStatistics} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
