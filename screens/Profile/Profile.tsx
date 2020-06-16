/*
 * File: Profile.tsx
 * Project: pill-box
 * File Created: Tuesday, 16th June 2020 7:53:07 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 16th June 2020 10:01:49 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Typography, { TypographyTypes } from '../../components/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../config/colors';
import { DeviceDimensions } from '../../config/dimension';
import ProfileSummary from './ProfileSummary';
import { SCREENS } from '../../config/screens';
import { StrokedButton, LinkButton } from '../../components/Buttons';

const Profile = () => {
  const navigation = useNavigation();

  const [editMode, setEditMode] = useState(false);
  const navigateTo = (screen: SCREENS) => navigation.navigate(screen);

  const [image, setImage] = useState('');
  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      {!image ? (
        <LinearGradient
          colors={[COLORS.primaryContrast, COLORS.primary]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: '100%',
            height: 300,
          }}
        />
      ) : (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: '100%',
            height: 300,
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: image }}
            resizeMode="cover"
            blurRadius={8}
          />
        </View>
      )}
      <View
        style={{
          marginTop: 64,
          paddingHorizontal: 24,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{ padding: 12 }}
          onPress={() => navigateTo(SCREENS.home)}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 12 }}
          onPress={() => setEditMode((prev) => !prev)}
        >
          <Feather name="edit-2" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 64 }}>
        <View
          style={{
            padding: 24,
            marginTop: 42,
            alignItems: 'center',
            backgroundColor: COLORS.background,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: 180,
              width: 180,
              height: 180,
              marginTop: -120,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 18,
            }}
          >
            <Image
              style={{
                width: '99%',
                height: '99%',
                borderWidth: 6,
                borderColor: '#fff',
                borderRadius: 200,
              }}
              source={{ uri: image }}
            />
          </View>
          {editMode && (
            <TouchableOpacity
              onPress={handleImagePicker}
              style={{
                marginTop: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather name="edit-2" size={14} color={COLORS.textDark} />
              <Typography
                extraStyles={{ marginLeft: 8 }}
                color={COLORS.textDark}
              >
                Edit Photo
              </Typography>
            </TouchableOpacity>
          )}
          <View style={{ marginTop: 24, alignItems: 'center' }}>
            <Typography type={TypographyTypes.heading} color={COLORS.textDark}>
              Maicy Williams
            </Typography>
            <Typography color={COLORS.textDark}>Female, 24</Typography>
          </View>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <ProfileSummary />
          <View
            style={{
              marginTop: 24,
              backgroundColor: '#fff',
              padding: 16,
              borderRadius: 4,
              elevation: 0,
            }}
          >
            <View style={{ marginBottom: 24 }}>
              <Typography
                type={TypographyTypes.subHeading}
                extraStyles={{ fontSize: 18 }}
              >
                Email
              </Typography>
              <Typography>maicy@test.com</Typography>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Typography
                type={TypographyTypes.subHeading}
                extraStyles={{ fontSize: 18 }}
              >
                Phone
              </Typography>
              <Typography>+91 8088884558</Typography>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Typography
                type={TypographyTypes.subHeading}
                extraStyles={{ fontSize: 18 }}
              >
                Blood Group
              </Typography>
              <Typography>O+ve</Typography>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Typography
                type={TypographyTypes.subHeading}
                extraStyles={{ fontSize: 18 }}
              >
                Date of Birth
              </Typography>
              <Typography>11 Nov 1994</Typography>
            </View>
            <View>
              <Typography
                type={TypographyTypes.subHeading}
                extraStyles={{ fontSize: 18 }}
              >
                Place
              </Typography>
              <Typography>Bengaluru, IN</Typography>
            </View>
          </View>
          <View style={{ width: 150, marginTop: 24, alignSelf: 'center' }}>
            <LinkButton color={COLORS.statusRed}>Logout</LinkButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
