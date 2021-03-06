import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import TextPingFang from '../../../components/TextPingFang'
import CommonNav from '../../../components/CommonNav'

import {
  getResponsiveWidth
} from '../../../common/styles'

export default class ProfileHeader extends Component {

  static propTypes = {}

  render() {
    return (
      <View style={[styles.container, this.props.headerStyle]}>
        <CommonNav
          navBarStyle={styles.navbar}
          rightButton={this.props.rightButton}
          onPressBack={this.props.onBack}
        />

        <View style={styles.title_container}>
          <TextPingFang style={styles.text_title}>{this.props.title}</TextPingFang>
          <Image style={styles.title_icon} source={this.props.titleIcon}/>
        </View>
        <TextPingFang style={styles.text_desc}>{this.props.desc}</TextPingFang>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  navbar: {
    backgroundColor: 'transparent'
  },
  title_container: {
    flexDirection: 'row',
  },
  text_title: {
    marginLeft: getResponsiveWidth(24),
    color: '#000',
    fontSize: 28,
    fontWeight: '500',
  },
  title_icon: {
    top: 6,
    left: 6
  },
  text_desc: {
    marginLeft: getResponsiveWidth(24),
    marginTop: getResponsiveWidth(8),
    color: '#000',
    fontSize: 16,
    fontWeight: '300'
  }
})
