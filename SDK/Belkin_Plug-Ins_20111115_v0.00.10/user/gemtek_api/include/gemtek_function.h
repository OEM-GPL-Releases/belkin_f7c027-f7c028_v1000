int start_ntpc(void);
int stop_ntpc(void);
int Set_NtpTimezone(int index);
int Ntp_set_sec(unsigned int Seconds);
int check_secnod(unsigned int Seconds);
int check_ipaddr(char * ip);
int check_ssid(const char * ssid);
int check_APSSID_exist(void);
int check_lan_ipaddr(char * ip);
int check_subnetmask(char * ip);
int check_pskkey(const char * szKey);
int check_wpspin(const char * pin);
int check_apclient_bssid(const char * szBSSID);
int check_apclientkey(const char * szKey);
int check_parametername(char* ParameterName);
int check_parametervalue(char* ParameterValue);
int check_mac_addr(const char * mac_addr);
int change_mac_addr(const char * mac_addr);
int Site_Survey_Request();
int transfer_string_to_hex(char *str_name);
unsigned long int get_utc_time(void);int ModifyWatchDogConf(int seconds);
int close_softdog(void);

