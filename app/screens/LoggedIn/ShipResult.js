import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {
  normalize,
  Avatar,
  Divider,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  deviceHeight,
  colors,
} from '../../helpers/constants';
import styles from '../../assets/styles';
import RoundedIcon from '../../components/RoundedIcon';

const logo = require('../../assets/images/logo-travilogs-text.png');
const avatar = require('../../assets/images/avatar.png');
const kapal = require('../../assets/images/ic_kapal.png');
const kapalBiru = require('../../assets/images/ic_kapal_biru.png');
const truck = require('../../assets/images/ic_truck.png');
const info = require('../../assets/images/info.png');

const images = {
  logo,
  avatar,
  kapal,
  kapalBiru,
  truck,
  info,
};

export default class ShipResult extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (
      <Image
        source={images.logo}
      />),
    headerStyle: {
      backgroundColor: colors.primary,
      borderWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
    },
    headerLeft: (
      <TouchableNativeFeedback onPress={() => navigation.goBack()} >
        <View style={[styles.rowDirection, { alignItems: 'center' }]}>
          <Icon name="ios-arrow-back" size={normalize(30)} color={colors.white} style={{ margin: 15 }} />
          <Text style={styles.whiteNormalText}>Back</Text>
        </View>
      </TouchableNativeFeedback>
    ),
    headerRight: (
      <Avatar
        imageProps={{ resizeMode: 'cover', resizeMethod: 'resize' }}
        source={avatar}
        rounded
        containerStyle={{ margin: 15 }}
        small
      />
    ),
  })

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={{ minHeight: deviceHeight }} >
        <View style={[styles.container, { backgroundColor: colors.white }]}>
          <View style={styles.headerSetSchedule}>
            <Text style={styles.whiteNormalText}>Atur Jadwal Kapal</Text>
          </View>
          <View style={styles.headerSetSchedule2}>
            <View style={[styles.rowDirection, { alignItems: 'center' }]}>
              <Text style={styles.whiteBoldNormalText}>Jakarta</Text>
              <Icon name="md-arrow-dropright" style={{ marginHorizontal: '3%' }} size={normalize(40)} color={colors.white} />
              <Text style={styles.whiteBoldNormalText}>Surabaya</Text>
            </View>
          </View>
          <View style={styles.stepsContainer}>
            <RoundedIcon
              style={styles.stepsPrimary}
              source={images.kapal}
            />
            <View style={styles.stepsLine} />
            <RoundedIcon
              style={styles.stepsGray}
              source={images.truck}
            />
            <View style={styles.stepsLine} />
            <RoundedIcon
              style={styles.stepsGray}
              source={images.truck}
            />
          </View>
          <View style={{ width: '100%', alignItems: 'flex-end', padding: '2%' }}>
            <Text style={styles.defaultvSmallText}>19 Feb - 10 Maret 2017</Text>
          </View>

          <View style={styles.filterContainer}>
            <View>
              <Text style={styles.blueTextBoldNormalSize}>FILTER :</Text>
            </View>
            <View style={styles.rowDirection}>
              <Text style={[styles.normalItalicText, { color: '#cccccc' }]}>Maskapai </Text>
              <Icon name="md-arrow-dropdown" size={normalize(22)} color={colors.primary} />
            </View>
            <View style={styles.rowDirection}>
              <Text style={[styles.normalItalicText, { color: '#cccccc' }]}>Waktu </Text>
              <Icon name="md-arrow-dropdown" size={normalize(22)} color={colors.primary} />
            </View>
            <View style={styles.rowDirection}>
              <Text style={[styles.normalItalicText, { color: '#cccccc' }]}>Harga </Text>
              <Icon name="md-arrow-dropdown" size={normalize(22)} color={colors.primary} />
            </View>
          </View>

          <View style={{ padding: '1%' }}>
            <Divider style={{ backgroundColor: colors.primary }} />
            <View style={[styles.rowSpaceBetweenDirection, { width: '80%', marginLeft: '2%' }]}>
              <View style={{ width: '27%' }} >
                <Text style={styles.blueTextNormalSize}>Maskapai</Text>
              </View>
              <View style={[styles.rowDirection, {
                          width: '33%', height: '100%', alignItems: 'center', justifyContent: 'center',
                          }]}
              >
                <Text style={styles.blueTextNormalSize}>ETA/ETD </Text>
                <Image
                  source={images.info}
                  resizeMethod="resize"
                  style={{ height: '50%', width: '12%' }}
                  resizeMode="contain"
                />
                <Icon name="md-arrow-dropdown" color={colors.primary} size={normalize(20)} />
              </View>
              <View style={{ width: '35%', alignItems: 'center' }} >
                <Text style={styles.blueTextNormalSize}>Harga  </Text>
              </View>
            </View>

            <Divider style={{ backgroundColor: colors.primary }} />

            <View style={[styles.rowSpaceBetweenDirection, { marginTop: '3%' }]}>
              <View style={styles.shipListName}>
                <Text style={styles.semiBigBoldBlueText}>TEMAS </Text>
                <Image
                  source={images.kapalBiru}
                  resizeMode="contain"
                  resizeMethod="resize"
                  style={{ width: '60%' }}
                />
              </View>
              <View
                style={styles.shipListETA}
              >
                <Text style={styles.blueTextvSmallSize}>ETA: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
                <Text style={styles.blueTextvSmallSize}>ETD: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
              </View>
              <View style={styles.shipListPrice}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>NON REFUNDABLE</Text>
                <Text style={styles.blueTextBoldNormalSize}>Rp 1.000.000</Text>
              </View>
              <View style={styles.shipListAdjective}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>Transit</Text>
                <Text style={styles.vsmallBlueBoldText}>Surabaya</Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: colors.primary }} />

            <View style={[styles.rowSpaceBetweenDirection, { marginTop: '3%' }]}>
              <View style={styles.shipListName}>
                <Text style={styles.semiBigBoldBlueText}>TEMAS </Text>
                <Image
                  source={images.kapalBiru}
                  resizeMode="contain"
                  resizeMethod="resize"
                  style={{ width: '60%' }}
                />
              </View>
              <View
                style={styles.shipListETA}
              >
                <Text style={styles.blueTextvSmallSize}>ETA: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
                <Text style={styles.blueTextvSmallSize}>ETD: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
              </View>
              <View style={styles.shipListPrice}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>NON REFUNDABLE</Text>
                <Text style={styles.blueTextBoldNormalSize}>Rp 1.000.000</Text>
              </View>
              <View style={styles.shipListAdjective}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>Transit</Text>
                <Text style={styles.vsmallBlueBoldText}>Surabaya</Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: colors.primary }} />

            <View style={[styles.rowSpaceBetweenDirection, { marginTop: '3%' }]}>
              <View style={styles.shipListName}>
                <Text style={styles.semiBigBoldBlueText}>TEMAS </Text>
                <Image
                  source={images.kapalBiru}
                  resizeMode="contain"
                  resizeMethod="resize"
                  style={{ width: '60%' }}
                />
              </View>
              <View
                style={styles.shipListETA}
              >
                <Text style={styles.blueTextvSmallSize}>ETA: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
                <Text style={styles.blueTextvSmallSize}>ETD: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
              </View>
              <View style={styles.shipListPrice}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>NON REFUNDABLE</Text>
                <Text style={styles.blueTextBoldNormalSize}>Rp 1.000.000</Text>
              </View>
              <View style={styles.shipListAdjective}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>Transit</Text>
                <Text style={styles.vsmallBlueBoldText}>Surabaya</Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: colors.primary }} />

            <View style={[styles.rowSpaceBetweenDirection, { marginTop: '3%' }]}>
              <View style={styles.shipListName}>
                <Text style={styles.semiBigBoldBlueText}>TEMAS </Text>
                <Image
                  source={images.kapalBiru}
                  resizeMode="contain"
                  resizeMethod="resize"
                  style={{ width: '60%' }}
                />
              </View>
              <View style={styles.shipListETA}>
                <Text style={styles.blueTextvSmallSize}>ETA: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
                <Text style={styles.blueTextvSmallSize}>ETD: <Text style={{ color: '#cccccc' }}>17 MAR 2017</Text></Text>
              </View>
              <View style={styles.shipListPrice}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>NON REFUNDABLE</Text>
                <Text style={styles.blueTextBoldNormalSize}>Rp 1.000.000</Text>
              </View>
              <View style={styles.shipListAdjective}>
                <Text style={[styles.blueTextvSmallSize, { fontSize: 8 }]}>Transit</Text>
                <Text style={styles.vsmallBlueBoldText}>Surabaya</Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: colors.primary }} />

            <Divider />

          </View>
        </View>
      </ScrollView>
    );
  }
}
