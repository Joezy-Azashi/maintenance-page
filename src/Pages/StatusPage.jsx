import React, { useEffect } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Chip, Divider, Grid, Paper, Tooltip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ChatBubbleOutline, LibraryBooks, NoteAdd } from '@mui/icons-material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const StatusPage = () => {
    const navigate = useNavigate()

    const StatusChip = ({ status }) => (
        <Chip
            label={status}
            color={status === 'Operational' ? 'success' : 'warning'}
            size="small"
            sx={{ width: "9rem" }}
        />
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#f9fafb', padding: '40px 20px' }}>
                <Box sx={{ bgcolor: '#f9fafb', py: 4 }}>
                    <Paper elevation={1} sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
                        <Grid container spacing={2}>

                            {/* Domain Services Accordion */}
                            <Grid size={12}>
                                <Accordion sx={{ border: "0", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
                                        <Typography variant="subtitle1">Domain Services</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding: "8px 0 16px 0"}}>
                                        <Grid container spacing={2}>
                                            <Grid size={12} display="flex" justifyContent="space-between">
                                                <Tooltip title="Generic Top-Level Domains">
                                                    <Typography>Core gTLDs</Typography>
                                                </Tooltip>
                                                <StatusChip status="Operational" />
                                            </Grid>
                                            <Grid size={12} display="flex" justifyContent="space-between">
                                                <Tooltip title="Country Code Top-Level Domains">
                                                    <Typography>Core ccTLDs</Typography>
                                                </Tooltip>
                                                <StatusChip status="Under Maintenance" />
                                            </Grid>
                                            <Grid size={12} display="flex" justifyContent="space-between">
                                                <Tooltip title="gTLDs except .com, .org, .net">
                                                    <Typography>Other gTLDs</Typography>
                                                </Tooltip>
                                                <StatusChip status="Operational" />
                                            </Grid>
                                            <Grid size={12} display="flex" justifyContent="space-between">
                                                <Typography>Other ccTLDs</Typography>
                                                <StatusChip status="Under Maintenance" />
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Standalone Items */}
                            {[
                                'API',
                                'Basic Email Service',
                                'G Suite Email Service',
                                'DNS Service',
                                'Web Hosting Service',
                                'SSL Certificates'
                            ].map((service) => (
                                <Grid key={service} size={12}>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography>{service}</Typography>
                                        <StatusChip status="Operational" />
                                    </Box>
                                    <Divider sx={{ mt: 2 }} />
                                </Grid>
                            ))}

                            {/* Enom.com Accordion */}
                            <Grid size={12}>
                                <Accordion sx={{ border: "0", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
                                        <Typography variant="subtitle1">Enom.com</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding: "8px 0 16px 0"}}>
                                        <Grid container spacing={2}>
                                            {[
                                                { app: 'Website', status: 'Under Maintenance' },
                                                { app: 'Domain Search', status: 'Operational' },
                                                { app: 'Domain Purchase', status: 'Operational' },
                                                { app: 'Domain Management', status: 'Operational' }
                                            ].map((item) => (
                                                <Grid key={item} size={12} display="flex" justifyContent="space-between">
                                                    <Typography>{item.app}</Typography>
                                                    <StatusChip status={item.status} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Customer Support */}
                            <Grid size={12} display="flex" justifyContent="space-between">
                                <Tooltip title="Enom customer service, helpdesk, knowledgebase, telephone and chat support.">
                                    <Typography>Customer Support</Typography>
                                </Tooltip>
                                <StatusChip status="Operational" />
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '15px 20px' }}>
                <Box sx={{ bgcolor: '#f9fafb', py: 4 }}>
                    <Paper
                        elevation={1}
                        sx={{
                            maxWidth: 900,
                            mx: 'auto',
                            border: '1px solid #c5304f',
                        }}
                    >
                        {/* Header */}
                        <Box
                            sx={{
                                bgcolor: '#c5304f',
                                color: '#fff',
                                px: 2,
                                py: 1.5,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                Enom Website
                            </Typography>
                            <Button size="small" variant="text" sx={{ color: '#fff', textTransform: 'none' }}>
                                Subscribe
                            </Button>
                        </Box>

                        {/* Content */}
                        <Box sx={{ p: 2 }}>
                            <Box mb={2}>
                                <Typography fontWeight="bold">
                                    Identified
                                    <Typography component="span" sx={{ fontWeight: 'normal', ml: 1 }}>
                                        - The issue has been identified and a fix is being implemented.
                                    </Typography>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={0.5}>
                                    May 19, 2025 - 06:56 PDT
                                </Typography>
                            </Box>

                            <Divider />

                            <Box mt={2}>
                                <Typography fontWeight="bold">
                                    Investigating
                                    <Typography component="span" sx={{ fontWeight: 'normal', ml: 1 }}>
                                        - The Enom control panel (cp.enom.com) is currently experiencing slowness and our teams are looking into it. We apologize for the inconvenience as we get this resolved.
                                    </Typography>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={0.5}>
                                    May 19, 2025 - 06:55 PDT
                                </Typography>
                            </Box>

                            <Box
                                sx={{ display: "flex", justifyContent: "end", fontWeight: 600, cursor: "pointer" }}
                                mt={3}
                                onClick={() => navigate('/maintenance-detail-page')}
                            >
                                <i>Read More...</i>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '15px 20px' }}>
                <Box sx={{ maxWidth: 900, margin: 'auto' }}>
                    <Grid container spacing={3} sx={{ margin: "60px 0" }}>
                        {/* Live Chat Card */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                                    <Box>
                                        <ChatBubbleOutline color="primary" sx={{ fontSize: 40, mb: 2 }} />
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            24/7 Live Chat
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2 }}>
                                            Need immediate assistance? Connect with our team anytime through live chat and get the support you need instantly!
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon="→"
                                        fullWidth
                                    >
                                        Chat Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Open Ticket Card */}
                        <Grid size={{ xs: 12, md: 4 }} sx={{ minHeight: '8rem' }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                                    <Box>
                                        <NoteAdd color="primary" sx={{ fontSize: 40, mb: 2 }} />
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            Open Ticket
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2 }}>
                                            Have a specific issue or request? Open a ticket, and our support team will get back to you with a solution as soon as possible!
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon="→"
                                        fullWidth
                                    >
                                        Create Ticket
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Knowledgebase Card */}
                        <Grid size={{ xs: 12, md: 4 }} sx={{ minHeight: '8rem' }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                                    <Box>
                                        <LibraryBooks color="primary" sx={{ fontSize: 40, mb: 2 }} />
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            Knowledgebase
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2 }}>
                                            Looking for answers or guides? Browse our comprehensive knowledgebase for articles and resources to help you resolve your queries!
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon="→"
                                        fullWidth
                                    >
                                        Explore Articles
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </section>
            <Footer />
        </>
    );
}

export default StatusPage
