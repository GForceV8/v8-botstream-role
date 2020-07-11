async return() {
    await this.clientInformation.wait(1000);

    this.clientInformation.appInfo = await this.clientInformation.fetchApplication();
    setInterval(async() => {
        this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    this.client.user.setActivity("with GForce");

    const channel = this.client.channels.get("655315690340745216");
    channel.send(":gear: Le bot est redémarré !");

    this.client.logger.log(
        `[V8]-[ROLES] est prêt à espionner ${
            this.client.users.size
        } utilisateurs sur ${this.client.channels.size} salons.`,
        "ready"
    );
};