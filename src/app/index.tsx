import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { Tabs } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Spacing } from '@/constants/theme';

// SVG Pola Geometris Biru
const backgroundSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='1080' height='900' viewBox='0 0 1080 900'>
  <rect fill='#00b7ff' width='1080' height='900'/>
  <g fill-opacity='.1'>
    <polygon fill='#444' points='90 150 0 300 180 300'/>
    <polygon points='90 150 180 0 0 0'/>
    <polygon fill='#AAA' points='270 150 360 0 180 0'/>
    <polygon fill='#DDD' points='450 150 360 300 540 300'/>
    <polygon fill='#999' points='450 150 540 0 360 0'/>
    <polygon points='630 150 540 300 720 300'/>
    <polygon fill='#DDD' points='630 150 720 0 540 0'/>
    <polygon fill='#444' points='810 150 720 300 900 300'/>
    <polygon fill='#FFF' points='810 150 900 0 720 0'/>
    <polygon fill='#DDD' points='990 150 900 300 1080 300'/>
    <polygon fill='#444' points='990 150 1080 0 900 0'/>
    <polygon fill='#DDD' points='90 450 0 600 180 600'/>
    <polygon points='90 450 180 300 0 300'/>
    <polygon fill='#666' points='270 450 180 600 360 600'/>
    <polygon fill='#AAA' points='270 450 360 300 180 300'/>
    <polygon fill='#DDD' points='450 450 360 600 540 600'/>
    <polygon fill='#999' points='450 450 540 300 360 300'/>
    <polygon fill='#999' points='630 450 540 600 720 600'/>
    <polygon fill='#FFF' points='630 450 720 300 540 300'/>
    <polygon points='810 450 720 600 900 600'/>
    <polygon fill='#DDD' points='810 450 900 300 720 300'/>
    <polygon fill='#AAA' points='990 450 900 600 1080 600'/>
    <polygon fill='#444' points='990 450 1080 300 900 300'/>
    <polygon fill='#222' points='90 750 0 900 180 900'/>
    <polygon points='270 750 180 900 360 900'/>
    <polygon fill='#DDD' points='270 750 360 600 180 600'/>
    <polygon points='450 750 540 600 360 600'/>
    <polygon points='630 750 540 900 720 900'/>
    <polygon fill='#444' points='630 750 720 600 540 600'/>
    <polygon fill='#AAA' points='810 750 720 900 900 900'/>
    <polygon fill='#666' points='810 750 900 600 720 600'/>
    <polygon fill='#999' points='990 750 900 900 1080 900'/>
    <polygon fill='#999' points='180 0 90 150 270 150'/>
    <polygon fill='#444' points='360 0 270 150 450 150'/>
    <polygon fill='#FFF' points='540 0 450 150 630 150'/>
    <polygon points='900 0 810 150 990 150'/>
    <polygon fill='#222' points='0 300 -90 450 90 450'/>
    <polygon fill='#FFF' points='0 300 90 150 -90 150'/>
    <polygon fill='#FFF' points='180 300 90 450 270 450'/>
    <polygon fill='#666' points='180 300 270 150 90 150'/>
    <polygon fill='#222' points='360 300 270 450 450 450'/>
    <polygon fill='#FFF' points='360 300 450 150 270 150'/>
    <polygon fill='#444' points='540 300 450 450 630 450'/>
    <polygon fill='#222' points='540 300 630 150 450 150'/>
    <polygon fill='#AAA' points='720 300 630 450 810 450'/>
    <polygon fill='#666' points='720 300 810 150 630 150'/>
    <polygon fill='#FFF' points='900 300 810 450 990 450'/>
    <polygon fill='#999' points='900 300 990 150 810 150'/>
    <polygon points='0 600 -90 750 90 750'/>
    <polygon fill='#666' points='0 600 90 450 -90 450'/>
    <polygon fill='#AAA' points='180 600 90 750 270 750'/>
    <polygon fill='#444' points='180 600 270 450 90 450'/>
    <polygon fill='#444' points='360 600 270 750 450 750'/>
    <polygon fill='#999' points='360 600 450 450 270 450'/>
    <polygon fill='#666' points='540 600 630 450 450 450'/>
    <polygon fill='#222' points='720 600 630 750 810 750'/>
    <polygon fill='#FFF' points='900 600 810 750 990 750'/>
    <polygon fill='#222' points='900 600 990 450 810 450'/>
    <polygon fill='#DDD' points='0 900 90 750 -90 750'/>
    <polygon fill='#444' points='180 900 270 750 90 750'/>
    <polygon fill='#FFF' points='360 900 450 750 270 750'/>
    <polygon fill='#AAA' points='540 900 630 750 450 750'/>
    <polygon fill='#FFF' points='720 900 810 750 630 750'/>
    <polygon fill='#222' points='900 900 990 750 810 750'/>
    <polygon fill='#222' points='1080 300 990 450 1170 450'/>
    <polygon fill='#FFF' points='1080 300 1170 150 990 150'/>
    <polygon points='1080 600 990 750 1170 750'/>
    <polygon fill='#666' points='1080 600 1170 450 990 450'/>
    <polygon fill='#DDD' points='1080 900 1170 750 990 750'/>
  </g>
</svg>
`;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Attempting login with:', email);
  };

  return (
    <View style={styles.container}>
      {/* Sembunyikan Bottom Tab Bar (Home/Explore) & Header khusus untuk halaman index */}
      <Tabs.Screen 
        options={{ 
          tabBarStyle: { display: 'none' },
          headerShown: false,
        }} 
      />

      {/* SVG Background Penuh */}
      <View style={StyleSheet.absoluteFill}>
        <SvgXml xml={backgroundSvg} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
      </View>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          
          {/* Logo Section */}
          <Image
            source={require('../../assets/logos.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Header Texts */}
          <ThemedText type="title" style={styles.title}>
            Welcome Back
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Sign in to access your dashboard
          </ThemedText>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email or Username"
              placeholderTextColor="#888888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <ThemedText style={styles.buttonText}>SIGN IN</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}>
              <ThemedText style={styles.forgotPasswordText}>
                Forgot your password?
              </ThemedText>
            </TouchableOpacity>

            {/* Credit Watermark */}
            <View style={styles.providerContainer}>
              <ThemedText style={styles.providerText}>
                provided by hikaruu
              </ThemedText>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b7ff',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center', // Memastikan konten berada pas di tengah secara vertikal
    alignItems: 'center',
    paddingHorizontal: Spacing?.four ? Spacing.four + 8 : 32,
  },
  contentContainer: {
    width: '100%',
    maxWidth: MaxContentWidth || 400,
    alignItems: 'stretch',
    justifyContent: 'center', // Menjaga elemen di dalam wrapper tetap presisi di tengah
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 28,
    color: '#FFFFFF', // Warna putih agar kontras dengan background biru
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 15,
  },
  formContainer: {
    gap: 16,
  },
  input: {
    height: 52,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  button: {
    height: 52,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  forgotPassword: {
    marginTop: 12,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  providerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  providerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
});
