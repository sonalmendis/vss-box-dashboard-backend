import type { Schema, Attribute } from '@strapi/strapi';

export interface DeviceTestingDeviceTestList2 extends Schema.Component {
  collectionName: 'components_sfdfsdfs_device_test_list2s';
  info: {
    displayName: 'device-test-list';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Device: Attribute.Enumeration<
      [
        'iOS 16.0 - iPhone 14 Pro Max',
        'iOS 16.0 - iPhone 13 Pro Max',
        'iOS 16.0 - iPhone 14 Pro',
        'iOS 16.0 - iPhone 13 Pro',
        'iOS 15 - iPhone 12 Mini',
        'iOS 15 - iPad Air (4th generation)',
        'iOS 15 - iPhone 13',
        'iOS 15 - iPad Pro (12.9-inch) (4th generation)',
        'iOS 14 - iPad (7th generation)',
        'iOS 14 - iPad Pro (12.9-inch) (3rd generation)',
        'iOS 14 - iPhone 12',
        'iOS 14 - iPhone 11 Pro Max',
        'iOS 14 - iPad Air (3rd generation)',
        'iOS 13.4 - iPhone 8',
        'iOS 13.4 - iPhone 11 Pro Max',
        'iOS 13.4 - iPhone X',
        'iOS 13.4 - iPhone XS',
        'iOS 13.4 - iPhone 11',
        'iOS 12.4 - iPad Pro (12.9-inch) (3rd generation)',
        'iOS 12.0 - iPhone XR',
        'iOS 12.0 - iPhone XS Max',
        'iOS 11.3 - iPhone X',
        'iOS 10.3 - iPhone 7',
        'iOS 10.3 - iPhone SE',
        'iOS 10.3 - iPad Pro',
        'ANDROID PHONES',
        'Samsung Galaxy S23 Ultra',
        'Samsung Galaxy Z Fold4',
        'Samsung Galaxy S21 5G',
        'Google Pixel 7 Pro',
        'Google Pixel 3',
        'Nexus 6p',
        'Google Pixel 6A',
        'Google Pixel 5 - 5G',
        'Motorola MotoX 2nd gen',
        'Gionee Marathon M5',
        'HTC Ten',
        'Huawei Honor 6x',
        'OnePlus 11 5G',
        'OnePlus 9',
        'Oppo Reno 6 Pro',
        'Xiaomi Mi 11 Pro',
        'Xiaomi Mi 8',
        'Realme 6i',
        'OnePlus 6T',
        'Samsung Galaxy S22 Plus 5G',
        'DESKTOP',
        'Safari 12 - macOS Mojave',
        'Safari 13 - macOS Catalina',
        'Safari 14 - macOS Big Sur',
        'Safari 15 - macOS Monterey',
        'Safari 16 - macOS Ventura',
        'Chrome 114 - Windows 11',
        'Chrome 113 - Windows 10',
        'Chrome 107 - Windows 7',
        'Chrome 114 - macOS Catalina',
        'Firefox 114 - Windows 11',
        'Firefox 113 - Windows 10',
        'Firefox 112 - Windows 7',
        'Firefox 114 - macOS Catalina',
        'Edge 114 - Windows 11',
        'Edge 113 - Windows 10',
        'Edge 102 - Windows 7',
        'Edge 114 - macOS Catalina'
      ]
    >;
    TestResults: Attribute.Enumeration<['Pass', 'Error', 'Not Tested']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'device-testing.device-test-list2': DeviceTestingDeviceTestList2;
    }
  }
}
