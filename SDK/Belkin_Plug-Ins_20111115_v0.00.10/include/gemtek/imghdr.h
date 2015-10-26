#ifndef GT_IMGHDR_H
#define GT_IMGHDR_H

#define GTIMG_MAGIC		"GMTK"

/* Product ID */
#define PID_RTL_AIRGO		1
#define PID_RTL_RALINK		2
#define PID_RDC_AIRGO		3
//Ralink change ID to 5 to use the same ID as Linksys
//#define PID_RDC_RALINK		4	/* White Lable */
#define PID_RDC_RALINK		5	/* White Lable */
#define PID_RDC_RALINK_LINKSYS	5	/* LINKSYS */

/* Gemtek */
typedef struct
{
	UINT8		  magic[4];		/* ASICII: GMTK */
	UINT32		checksum;		/* CRC32 */
	UINT32		version;		/* x.x.x.x */
	UINT32		kernelsz;		/* The size of the kernel image */
	UINT32		imagesz;		/* The length of this image file ( kernel + romfs + this header) */
	UINT32		pid;			/* Product ID */
	UINT32		fastcksum;		/* Partial CRC32 on (First(256), medium(256), last(512)) */
	UINT32		reserved;
}gt_imghdr_t;

typedef struct
{
	UINT32		      checksum;		/* CRC32 */
	unsigned char		hdrlen;		/* x.x.x.x */
	unsigned char   FW_HEADER[5];
	unsigned char   FW_EXTHDR[11];
}gt_fwhdr_t;


#endif
