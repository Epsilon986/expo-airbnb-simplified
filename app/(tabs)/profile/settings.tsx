import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function settings() {
    const [notifications, setNotifications] = useState(true);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Paramètres</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ marginRight: 10 }}>Notifications</Text>
                <Switch
                    value={notifications}
                    onValueChange={setNotifications}
                />
            </View>
        </View>
    );
}