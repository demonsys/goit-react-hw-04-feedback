import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback-options/FeedbackOptions';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeStatistics = event => {
    const feedbackType = event.target.textContent.toLowerCase();
    this.setState(state => ({
      [feedbackType]: state[feedbackType] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.changeStatistics} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
