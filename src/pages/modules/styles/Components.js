import { alpha } from '@mui/material';
import { lighten } from '@mui/material/styles';

/**
 * Style overrides for Material UI components.
 *
 * @see https://github.com/mui-org/material-ui/tree/master/packages/mui-material/src
*/

const createComponents = () => ({
  MuiCssBaseline: {
    styleOverrides: `
    * {
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb {
      background: #bfbfbf;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
    ::-webkit-scrollbar-corner {
      background: #179a16;
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 100;
      src: url("/fonts/Kanit-Thin.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 100;
      src: url("/fonts/Kanit-ThinItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 200;
      src: url("/fonts/Kanit-ExtraLight.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 200;
      src: url("/fonts/Kanit-ExtraLightItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 300;
      src: url("/fonts/Kanit-Light.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 300;
      src: url("/fonts/Kanit-LightItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url("/fonts/Kanit-Regular.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 400;
      src: url("/fonts/Kanit-Italic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: url("/fonts/Kanit-Medium.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 500;
      src: url("/fonts/Kanit-MediumItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 600;
      src: url("/fonts/Kanit-SemiBold.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 600;
      src: url("/fonts/Kanit-SemiBoldItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src: url("/fonts/Kanit-Bold.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 700;
      src: url("/fonts/Kanit-BoldItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 800;
      src: url("/fonts/Kanit-ExtraBold.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 800;
      src: url("/fonts/Kanit-ExtraBoldItalic.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: normal;
      font-display: swap;
      font-weight: 900;
      src: url("/fonts/Kanit-Black.ttf");
    }
    @font-face {
      font-family: "Kanit";
      font-style: italic;
      font-display: swap;
      font-weight: 900;
      src: url("/fonts/Kanit-BlackItalic.ttf");
    }
    @font-face {
      font-family: "RobotoSlab";
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src: url("/fonts/RobotoSlab-Bold.ttf");
    }
    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url("/fonts/Roboto-Regular.ttf");
    }
    @font-face {
      font-family: "Papyrus";
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url("/fonts/PapyrusStd.OTF");
    }
  `
  },

  MuiLink: {
    defaultProps: {
      underline: 'none'
    }
  },

  MuiInputLabel: {
    styleOverrides: {
      outlined: ({ theme }) => ({
        position: 'relative',
        transform: 'none',
        marginBottom: theme.spacing(0.75)
      })
    }
  },

  MuiOutlinedInput: {
    styleOverrides: {
      sizeSmall: {
        borderRadius: '5px'
      },
      root: ({ theme: { palette } }) => ({
        borderRadius: '10px',
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.divider
        },
        '&.Mui-disabled': {
          backgroundColor: lighten(palette.primary.main, 0.92),
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.grey[300]
          }
        }
      })
    }
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '10px !important'
      },
      list: ({ theme: { spacing } }) => ({
        padding: spacing(3),
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '10px'
      })
    }
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '6px',
        ':hover, &.Mui-selected,&.Mui-focusVisible': {
          backgroundColor: '#EAECF2',
          ':hover': {
            backgroundColor: '#EAECF2'
          }
        }
      }
    }
  },

  MuiButtonBase: {
    styleOverrides: {
      root: {
        borderRadius: 10
      }
    }
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        textTransform: 'initial'
      },
      outlined: ({ theme }) => ({
        borderColor: theme.palette.primary.main,
        minWidth: '140px'
      }),
      contained: {
        minWidth: '140px'
      },
      sizeSmall: {
        padding: '4px 8px',
        fontSize: '0.875rem'
      },
      sizeMedium: {
        padding: '8px 12px',
        fontSize: '1rem'
      },
      sizeLarge: {
        padding: '12px 16px',
        fontSize: '1rem'
      }
    }
  },

  MuiButtonGroup: {
    styleOverrides: {
      root: {
        boxShadow: 'none'
      }
    }
  },

  MuiDialog: {
    styleOverrides: {
      paperFullScreen: ({ theme: { breakpoints, palette, spacing } }) => ({
        margin: 0,
        background: palette.grey[100],
        borderRadius: 0,
        '& .MuiDialogTitle-root': {
          paddingTop: spacing(3),
          background: palette.common.white
        },
        '& .MuiDialogContent-root': {
          margin: spacing(3),
          marginLeft: 'auto',
          marginRight: 'auto',
          background: palette.common.white,
          [breakpoints.down('sm')]: {
            padding: 0
          }
        },
        '& .MuiDialogActions-root': {
          background: palette.common.white,
          justifyContent: 'center',
          padding: spacing(3)
        }
      })
    }
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme: { breakpoints, spacing } }) => ({
        fontSize: '1.25rem',
        textAlign: 'center',
        fontWeight: 600,
        padding: spacing(3),
        paddingTop: spacing(7.5),
        paddingBottom: spacing(4),
        [breakpoints.down('md')]: {
          padding: spacing(2)
        }
      })
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme: { breakpoints, spacing } }) => ({
        padding: spacing(7.5),
        [breakpoints.down('md')]: {
          padding: spacing(3)
        }
      })
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme: { breakpoints, spacing } }) => ({
        padding: spacing(3),
        paddingTop: 0,
        [breakpoints.down('md')]: {
          padding: spacing(2)
        }
      })
    }
  },

  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[300],
        '&:nth-last-of-type(1)': {
          borderBottom: 'none'
        },
        '&.MuiTableRow-hover:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.1)
        }
      }),
      head: ({ theme }) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.1)
      })
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[900],
        padding: '8px 16px',
        fontSize: '0.875rem',
        '&:first-of-type': {
          paddingLeft: '24px'
        },
        '&:last-of-type': {
          paddingRight: '24px'
        }
      }),
      head: {
        fontWeight: 600
      }
    }
  },

  MuiTabs: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        minHeight: 'auto'
      })
    }
  },

  MuiTab: {
    styleOverrides: {
      root: ({ theme, styleProps }) => ({
        fontSize: '1rem',
        minWidth: 'unset',
        minHeight: '48px',
        padding: '6px 16px',
        textTransform: 'none',
        fontWeight: 600,
        color: theme.palette.grey[900],
        opacity: styleProps?.disabled ? 0.4 : 1,
        '&.Mui-selected': {
          color: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.1)
          }
        },
        '&:hover': {
          backgroundColor: alpha(theme.palette.grey[900], 0.1)
        }
      })
    }
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: '7px'
      }
    }
  },

  MuiRadio: {
    styleOverrides: {
      root: {
        padding: '7px'
      }
    }
  },

  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: '7px'
      }
    }
  },

  MuiSlider: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        height: '4px'
      })
    }
  },

  MuiAccordion: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-expanded': {
          margin: 0
        },
        '&:before': {
          display: 'none'
        },
        '&$rounded': {
          borderRadius: '10px'
        },
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      })
    }
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '0px',
        minHeight: 'auto',
        '&.Mui-expanded': {
          minHeight: 'auto'
        },
        '&.MuiAccordionSummary-root.Mui-expanded': {
          margin: 0
        },
        '& .MuiAccordionSummary-content': {
          margin: '12px 0',
          '& .MuiTypography-root': {
            fontWeight: 600,
            color: theme.palette.grey[900]
          }
        }
      })
    }
  },

  MuiAccordionDetails: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '0px',
        '& .MuiTypography-root': {
          fontSize: '0.875rem',
          color: theme.palette.grey[800]
        }
      })
    }
  },

  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        padding: '8px 16px',
        fontWeight: 600,
        fontSize: '0.875rem',
        boxShadow: `0px 2px 4px -1px ${alpha(theme.palette.primary.main, 0.2)}, 
          0px 4px 5px 0px ${alpha(theme.palette.primary.main, 0.14)}, 
          0px 1px 10px 0px ${alpha(theme.palette.primary.main, 0.12)}`
      }),
      filledError: {
        backgroundColor: '#f44336',
        color: '#ffffff'
      },
      filledWarning: {
        backgroundColor: '#ff9800',
        color: '#ffffff'
      },
      filledInfo: {
        backgroundColor: '#2196f3',
        color: '#ffffff'
      },
      filledSuccess: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      },
      standardError: {
        color: '#f44336'
      },
      standardWarning: {
        color: '#ff9800'
      },
      standardInfo: {
        color: '#2196f3'
      },
      standardSuccess: {
        color: '#4caf50'
      },
      outlinedError: {
        color: '#f44336',
        borderColor: '#f44336'
      },
      outlinedWarning: {
        color: '#ff9800',
        borderColor: '#ff9800'
      },
      outlinedInfo: {
        color: '#2196f3',
        borderColor: '#2196f3'
      },
      outlinedSuccess: {
        color: '#4caf50',
        borderColor: '#4caf50'
      },
      icon: {
        marginRight: 0
      },
      message: {
        display: 'flex',
        alignItems: 'center',
        '& > svg': {
          marginRight: '8px'
        }
      },
      action: {
        marginRight: '-8px'
      }
    }
  },

  MuiSnackbar: {
    styleOverrides: {
      root: {
        borderRadius: '10px'
      },
      anchorOriginBottomCenter: {
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  },

  MuiAlertTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.grey[900]
      })
    }
  },

  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.1)
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.main
          }
        },
        '&.MuiPaginationItem-ellipsis': {
          '& .MuiSvgIcon-root': {
            fontSize: '1.25rem'
          }
        }
      })
    }
  },

  MuiPagination: {
    styleOverrides: {
      ul: {
        justifyContent: 'center'
      }
    }
  },

  MuiAvatarGroup: {
    styleOverrides: {
      avatar: {
        border: '2px solid #fff'
      }
    }
  },

  MuiAvatar: {
    styleOverrides: {
      root: {
        width: '36px',
        height: '36px',
        fontSize: '1rem',
        fontWeight: 600
      }
    }
  },

  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: '0.35em'
      },
      h1: ({ theme }) => ({
        fontSize: '2.5rem',
        fontWeight: 600,
        color: '#F5F5F5',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2rem'
        }
      }),
      h2: ({ theme }) => ({
        fontSize: '2rem',
        fontWeight: 600,
        color: theme.palette.grey[900],
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.75rem'
        }
      }),
      h3: ({ theme }) => ({
        fontSize: '1.75rem',
        fontWeight: 600,
        color: theme.palette.grey[900],
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5rem'
        }
      }),
      h4: ({ theme }) => ({
        fontSize: '1.5rem',
        fontWeight: 600,
        color: theme.palette.grey[900],
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.25rem'
        }
      }),
      h5: ({ theme }) => ({
        fontSize: '1.25rem',
        fontWeight: 600,
        color: theme.palette.grey[900],
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.125rem'
        }
      }),
      h6: ({ theme }) => ({
        fontSize: '1.125rem',
        fontWeight: 600,
        color: theme.palette.grey[900],
        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem'
        }
      }),
      subtitle1: ({ theme }) => ({
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.grey[900]
      }),
      subtitle2: ({ theme }) => ({
        fontSize: '0.875rem',
        fontWeight: 600,
        color: theme.palette.grey[900]
      }),
      body1: ({ theme }) => ({
        fontSize: '1rem',
        color: theme.palette.grey[900]
      }),
      body2: ({ theme }) => ({
        fontSize: '0.875rem',
        color: theme.palette.grey[900]
      }),
      caption: ({ theme }) => ({
        fontSize: '0.75rem',
        color: theme.palette.grey[900]
      })
    }
  }
});

export { createComponents };
