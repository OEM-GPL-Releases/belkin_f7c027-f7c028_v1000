#ifndef __NVRAMD_H
#define __NVRAMD_H

#define NVRAM_MTDSIZE		(64 * 1024)	/* The size of the MTD that contains the NVRam parameters */
#define NVRAM_DATASIZE		( 64 * 1024)	/* The size of NVRam data in the NVRam MTD */
#define FACTORY_MTDSIZE		(64 * 1024)	/* The size of the MTD that contains the NVRam parameters */
#define FACTORY_DATASIZE		( 64 * 1024)	/* The size of NVRam data in the NVRam MTD */
//#define NVRAM_MTDSIZE		(128 * 1024)	/* The size of the MTD that contains the NVRam parameters */
//#define NVRAM_DATASIZE		( 128 * 1024)	/* The size of NVRam data in the NVRam MTD */
#define NVRAM_MAGIC		"NVRM"
#define FACTORY_MAGIC		"FACTORY"

typedef struct
{
	UINT8	magic[4];	/* It should always be NVRM */
	UINT32	checksum;	/* CRC32 for NVRAM */
	UINT32	entrynum;	/* The total number for entry elements inside the NVRAM */
	UINT32	nvramlen;	/* The data length of NVRAM data */
} nvram_hdr_t;

typedef struct
{
	UINT8	magic[7];	/* It should always be NVRM */
	UINT32	checksum;	/* CRC32 for NVRAM */
	UINT32	datalen;	/* The data length of NVRAM data */
	UINT8   factory_wrote; /*a flag to indicate the factory value has been writen*/
#ifdef WITH_CWF	
	char		serial[16]; /*serail number of this product */
#endif	
//	char		WLAN_MAC_ADDR[18]; /* wireless mac address */
	char		CountryCode[16]; /* Country Code */
	char    targetCountry[16]; /* targetCountry */
	char    friendlyName[50]; /* friendlyName */
	char    eeprom_backup[512];
} factory_t;


#define NVRAM_ENTRY_SZ(entry)	(strlen((entry)->name) + 1 + strlen((entry)->value) + 1)

int nvramd_init(void);
int nvramd_exit(void);
int nvramd_restore(void);
int nvramd_set(char *name, char *value);
int nvramd_unset(char *name);
int nvramd_commit(void);
const char *nvramd_get(char *name);

#endif
