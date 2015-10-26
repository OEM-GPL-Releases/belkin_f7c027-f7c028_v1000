deps_config := \
	util-linux/Config.in \
	sysklogd/Config.in \
	shell/Config.in \
	procps/Config.in \
	networking/udhcp/Config.in \
	networking/Config.in \
	modutils/Config.in \
	miscutils/Config.in \
	loginutils/Config.in \
	init/Config.in \
	findutils/Config.in \
	editors/Config.in \
	e2fsprogs/Config.in \
	debianutils/Config.in \
	console-tools/Config.in \
	coreutils/Config.in \
	archival/Config.in \
	/opt/cruisecontrol/projects/plugins-ga/plugins/trunk/embedded-WeMo_1_3/Belkin_Plug-Ins_20111115_v0.00.10/user/busybox/sysdeps/linux/Config.in

.config include/config.h: $(deps_config)

$(deps_config):
