/* config.h.  Generated automatically by configure.  */
#ifndef CONFIG_H
#define CONFIG_H

/* ===================================================================
 * config.h
 *
 * config.h is derived from config.h.in -- do not edit config.h
 *
 * This contains variables that the configure script checks and
 * then defines or undefines. The source code checks for these
 * variables to know if certain features are present.
 *
 * by Mark Gates <mgates@nlanr.net>
 *
 * Copyright  1999  The Board of Trustees of the University of Illinois
 * All rights reserved.  See doc/license.txt for complete text.
 *
 * $Id: config.h.in,v 1.4 2002/10/02 19:09:23 kgibbs Exp $
 * =================================================================== */

/* Define if threads exist (using pthreads or Win32 threads) */
#define HAVE_POSIX_THREAD 1
/* #undef HAVE_WIN32_THREAD */
#define _REENTRANT 1

/* Define if on OSF1 and need special extern "C" around some header files */
/* #undef SPECIAL_OSF1_EXTERN */

/* Define if the strings.h header file exists */
#define HAVE_STRINGS_H 1

/* Define the intXX_t, u_intXX_t, size_t, ssize_t, and socklen_t types */
/* On the Cray J90 there is no 4 byte integer, so we define int32_t
 * but it is 8 bytes, and we leave HAVE_INT32_T undefined. */
#define HAVE_INT16_T 1
#define HAVE_INT32_T 1
#define HAVE_INT64_T 1
#define HAVE_U_INT16_T 1
#define HAVE_U_INT32_T 1
#define HAVE_U_INT64_T 1

/* #undef int16_t */
/* #undef int32_t */
/* #undef int64_t */
/* #undef u_int16_t */
/* #undef u_int32_t */
/* #undef u_int64_t */
/* #undef  size_t */
/* #undef ssize_t */

/* socklen_t usually defined in <sys/socket.h>. Unfortunately it doesn't
 * work on some systems (like DEC OSF/1), so we'll use our own Socklen_t */
#define Socklen_t socklen_t

/* Define if you have these functions. */
#define HAVE_SNPRINTF 1
#define HAVE_INET_PTON 1
#define HAVE_INET_NTOP 1
#define HAVE_GETTIMEOFDAY 1
/* #undef HAVE_PTHREAD_CANCEL */
#define HAVE_USLEEP 1

/* standard C++, which isn't always... */
/* #undef bool */
/* #undef true */
/* #undef false */

/* Define if the host is Big Endian (network byte order) */
/* #undef WORDS_BIGENDIAN */

/* Define if multicast support exists */
#define MCAST 1

/* Define if all IPv6 headers/structures are present */
#define IPV6 1

/* Define if Debugging of sockets is desired */
/* #undef DBG_MJZ */

#endif /* CONFIG_H */
