import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';

import { 
    LightModeOutlined, DarkModeOutlined, NotificationsOutlined,
    SettingsOutlined, PersonOutlined, SearchOutlined
} from '@mui/icons-material';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchOutlined />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    { theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined />
                    ) : (
                        <LightModeOutlined />
                    )}
                </IconButton>
                <IconButton><NotificationsOutlined /></IconButton>
                <IconButton><SettingsOutlined /></IconButton>
                <IconButton><PersonOutlined /></IconButton>
            </Box>
            <IconButton sx={{ display: "flex"}}></IconButton>
        </Box>
    );
}

export default Topbar;