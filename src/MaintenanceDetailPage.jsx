import React, { useEffect } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const MaintenanceDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Container maxWidth={"lg"} sx={{ px: 3, pb: 10 }}>
                <Typography variant='h3' fontWeight={700} gutterBottom mt={7}>
                    Maintenance Details
                </Typography>

                <Typography paragraph>
                    We're currently performing scheduled maintenance to enhance your experience.
                    This comprehensive update includes significant infrastructure improvements
                    and feature enhancements across our platform.
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5' fontWeight={600} gutterBottom>
                        ⏰ Maintenance Schedule
                    </Typography>
                    <Typography paragraph>
                        <strong>Start Time:</strong> May 20, 2023 - 02:00 AM UTC<br />
                        <strong>Expected Completion:</strong> May 20, 2023 - 06:00 AM UTC<br />
                        <strong>Duration:</strong> 4 hours
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5' fontWeight={600} gutterBottom>
                        🛠️ System Improvements
                    </Typography>
                    <Typography paragraph>
                        During this maintenance window, we'll be implementing the following upgrades:
                    </Typography>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                        <li>✅ Complete backend API overhaul (v2.0 release)</li>
                        <li>✅ Database migration to clustered architecture</li>
                        <li>✅ Implementation of new caching layer</li>
                        <li>🔄 Frontend UI/UX redesign (phase 1)</li>
                        <li>🔒 Enhanced security protocols and SSL upgrades</li>
                        <li>📈 Performance optimization for high-traffic periods</li>
                        <li>🌐 CDN network expansion to 3 new regions</li>
                    </ul>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5' fontWeight={600} gutterBottom>
                        📉 Expected Downtime Impact
                    </Typography>
                    <Typography paragraph>
                        The following services will be unavailable during maintenance:
                    </Typography>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                        <li>🔴 User authentication system (15 minute window)</li>
                        <li>🔴 Payment processing (30 minute window)</li>
                        <li>🟡 Dashboard analytics (read-only mode)</li>
                    </ul>
                    <Typography paragraph>
                        All other services will remain available with minimal impact.
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5' fontWeight={600} gutterBottom>
                        🚀 New Features Preview
                    </Typography>
                    <Typography paragraph>
                        This maintenance will enable these upcoming features:
                    </Typography>
                    <Box sx={{
                        backgroundColor: '#f5f5f5',
                        p: 3,
                        borderRadius: 1,
                        mb: 2
                    }}>
                        <Typography variant='h6'>Feature Spotlight: Real-time Collaboration</Typography>
                        <Typography paragraph sx={{ mb: 0 }}>
                            Our new collaborative workspace will allow team members to work simultaneously
                            on projects with live updates and commenting.
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#f5f5f5',
                        p: 3,
                        borderRadius: 1,
                        mb: 2
                    }}>
                        <Typography variant='h6'>Enhanced Reporting Dashboard</Typography>
                        <Typography paragraph sx={{ mb: 0 }}>
                            New customizable reports with advanced filtering and export options.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5' fontWeight={600} gutterBottom>
                        ❓ Frequently Asked Questions
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography fontWeight={600}>Will I lose any data during the maintenance?</Typography>
                        <Typography paragraph sx={{ mt: 1 }}>
                            No, all your data is securely backed up and will remain intact.
                            We perform these maintenance windows during low-traffic periods
                            to minimize impact.
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography fontWeight={600}>What should I do if I'm in the middle of work?</Typography>
                        <Typography paragraph sx={{ mt: 1 }}>
                            We recommend saving your work before the maintenance window begins.
                            The system will display warnings 30 minutes prior to going offline.
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography fontWeight={600}>How will I know when maintenance is complete?</Typography>
                        <Typography paragraph sx={{ mt: 1 }}>
                            We'll send an email notification to all users when services are fully restored.
                            You can also check our status page at status.facioinnovations.com.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    backgroundColor: '#e3f2fd',
                    p: 3,
                    borderRadius: 1,
                    mb: 4
                }}>
                    <Typography variant='h6' gutterBottom>Need Immediate Assistance?</Typography>
                    <Typography paragraph>
                        Our support team is available 24/7 during the maintenance period.
                        <br />
                        📧 Email: <Link href="mailto:support@facioinnovations.com">support@facioinnovations.com</Link>
                        <br />
                        📞 Phone: +1 (800) 123-4567
                        <br />
                        💬 Live Chat: Available on our support portal
                    </Typography>
                </Box>

                <Typography variant='body2' color='text.secondary'>
                    Last updated: May 19, 2023 - 10:15 AM UTC
                </Typography>
            </Container>
            <Footer />
        </>
    )
}

export default MaintenanceDetailPage;