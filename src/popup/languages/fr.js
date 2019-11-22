export default {
  // placeholder
  placeholder: {
    account: 'Entrer le nom du compte',
    password: 'Entrer le mot de passe',
    temporary: 'Entrer un mot de passe temporaire',
    oldPassword: 'Entrer l\'ancien mot de passe',
    repassword: 'Confirmer le mot de passe',
    input: 'Entrer',
  },
  // button
  button: {
    create: 'Créer',
    agree: 'd\'accord',
    back: 'retour',
    accountLogin: 'Connexion au compte',
    keysLogin: 'Connexion par clé privée',
    createAccount: 'Créer un compte',
    importAccount: 'Importer un compte',
    editAccountName: 'Modifier le nom',
    lookAccount: 'Afficher le compte',
    deletedWallet: 'Sorter du portefeuille',
    removeAccount: 'Sortez',
    exportPrivateKey: 'Exporter',
    recharge: 'Dépôser',
    transfer: 'Envoyer',
    resource: 'Ressource',
    copy: 'Copier ',
    sure: 'Confirmer',
    copyPrivate: 'Copier la clé privée',
    doneCopy: 'Sauvegardé',
    sureCreateAccount: 'Confirmer création',
    save: 'Sauvegarder',
    cancel: 'Annuler',
    copyAddress: 'Copier l\'adresse',
    send: 'Envoyer',
    surePay: 'Confirmer',
    unlock: 'Déverrouiller',
    reset: 'Exporter',
    modifyPassword: 'Modifier le mot de passe',
    agreement: 'Accord',
    policy: 'Politique',
    close: 'Fermer',
    pledge: 'Geler',
    redeem: 'Dégeler',
    pledgeSure: 'Confirmer',
    redeemSure: 'Confirmer',
    importSure: 'Confirmer',
    confirm: 'Confirmer',
    reject: 'Rejeter'
  },
  // message
  message: {
    rememberPassword: 'S\'il vous plaît rappelez-vous du mot de passe, le mot de passe une fois oubliez ne sera plus récupérable',
    recommendNew: 'Recommander de nouveaux utilisateurs pour l\'utilisation',
    recommendOld: 'Recommander aux utilisateurs qui ont déjà un compte COCOS',
    savePrivateKey: 'Remarque: exportez la clé privée correspondante maintenant et conservez-la dans un endroit sûr. Ne divulguez la clé privée à personne ',
    privateKeyOnly: 'La clé privée sera le seul moyen de récupérer votre compte',
    noMoreRecord: 'Aucun autre transaction',
    noRecord: 'Aucun enregistrement de transaction',
    noWhiteList: 'Pas de liste blanche',
    joinWhiteList: 'Ajouter à la liste blanche, ce site ne le demandera plus',
    warningPrivateKey: 'Avertissement de sécurité: ne divulguez pas votre clé privée à personne',
    rechargeOnly: 'Cette adresse ne supporte que COCOS et son jeton',
    verifyPassword: 'Vous devez vérifier votre mot de passe actuel',
    lockSetting: 'Réglage automatique du verrouillage',
    ownerError: 'Le nom du compte n\'est pas vous',
    lockTip: 'Lorsque vous vous arrêtez, vous pouvez verrouiller automatiquement CocosPay en définissant l\'heure de départ',
    changeLanguage: 'Sélectionnez la langue',
    resourceTip: 'Les transferts, les transactions, l\'exécution de contrats et d\'autres opérations consomment des ressources, qui peuvent être obtenues en hypothéquant des COCOS',
    pledgeTip: 'Par le biais de COCOS hypothécaires (droits de vote sur le champ de vagues) et de ressources, le COCOS hypothécaire sera gelé pendant trois jours et ne pourra plus être échangé. À la fin de la période de gel, le COCOS hypothéqué peut être libéré et échangé.'
  },
  // verify
  verify: {
    accountType: 'lettre minuscule 5-63 bits commençant + chiffre',
    passwordType: '8-12 chiffres, lettres et symboles spéciaux',
    passwordNull: 'Le mot de passe ne peut pas être vide',
    passwordLength: 'Le mot de passe ne doit pas être inférieur à 8 bits',
    passwordSure: 'Veuillez entrer votre mot de passe à nouveau',
    passwordMatch: 'Les deux mots de passe ne correspondent pas',
    accountNull: 'S\'il vous plaît entrez votre nom de compte',
    accountReg: 'Veuillez saisir le nom d\'utilisateur correct',
    ownerAccountNull: 'Veuillez sélectionner le compte de paiement',
    toAddressNull: 'S\'il vous plaît entrez l\'adresse de réception',
    tokenNull: 'Veuillez sélectionner un jeton',
    number: 'S\'il vous plaît entrer le numéro',
    numberGtZero: 'Veuillez entrer un nombre supérieur à 0',
    ownerKey: 'La clé du propriétaire ne peut pas être transférée, veuillez importer la clé active',
    minimum: 'Le nombre maximum de chiffres après le signe décimal est',
    walletPassword: 'Veuillez saisir le mot de passe temporaire d\'origine',
    noZero: 'La quantité doit être supérieure à 0',
  },
  // title
  title: {
    agreement: 'Accord d\'utilisateur',
    createAccount: 'Créer un compte',
    history: 'enregistrements de transaction',
    editorAccount: 'Changer le nom du compte',
    recharge: 'Dépôt',
    transfer: 'Envoyer',
    walletType: 'Mode portefeuille',
    accountType: 'Mode de compte',
    sendDetail: 'Détails de la transaction',
    welcome: 'Bon retour!',
    setting: 'Règlage',
    policy: 'Politique de confidentialité',
    resource: 'Ressource',
    resourceTitle: 'Ressources',
    pledgeTrx: 'Geler',
    redeemTrx: 'Dégeler',
    importAccount: 'Importer un compte',
    removeAccount: 'Quitter le compte',
    signature: 'Demande de signature',
    locked: 'Non connecté ou verrouillé',
    test: 'TEST',
    coin: 'Monnaies',
    registerCreator: 'S\'inscrire en tant que développeur',
    creatWorldView: 'Créer un multivers',
    creatNHAsset: 'NH资产创建',
    deleteNHAsset: 'NH资产删除',
    publishVotes: 'Vote'
  },
  // alert
  alert: {
    tranferSuccess: 'Succès de transfert',
    copySuccess: 'Succès de la copie',
    copyFail: 'Échec de la copie',
    exportSuccess: 'Succès de l\'exportation',
    exportFail: 'Echec de l\'exportation',
    changeFail: 'Echec du changement',
    passwordError: 'Erreur de mot de passe',
    sendSuccess: 'Envoyer le succès',
    sendFail: 'Echec d\'envoie',
    modifySuccess: 'Succès des modifications',
    modifyPasswordSuccess: 'Succès de la modification du mot de passe',
    redeemSuccess: 'Succès de dégele',
    redeemFail: 'Le dégele a échoué. Veuillez réessayer plus tard',
    pledgeSuccess: 'Succès du gel',
    pledgeFail: 'Echec du gel',
    existAccount: 'Compte existant',
    illegalPrivateKey: 'Clé privée illégal',
    transferFail: 'Le solde disponible est insuffisant après déduction des frais de service',
    setSuccess: 'Configuration réussite',
  },
  // confirm
  confirm: {
    removeAccount: 'Assurez-vous que la clé privée est exportée avant de quitter le compte ou souvenez-vous du mot de passe, sinon le compte ne pourra pas être restauré après la fermeture'
  },
  // label
  label: {
    send: 'L\'expéditeur',
    receive: 'Le receveur',
    hash: 'ID de l\'échange',
    user: 'Utilisateur',
    blockHeight: 'Hauteur du bloc',
    tradeTime: 'Heure de l\'échange：',
    orderTime: 'Temps de vente：',
    orderPrice: 'Prix：',
    coin: 'Monnaie：',
    orderID: 'ID de commande ：',
    ownerAccount: 'Compte de paiement',
    toAddress: 'Adresse de réception',
    tokenType: 'Changer de jeton',
    amount: 'Montant à envoyer',
    mainNetwork: 'Réseau principale',
    testNetwork: 'Réseau de test',
    customNet: 'Réseau privé',
    bandwidth: 'Largeur de bande',
    vote: 'Vote',
    donePledge: 'TRX Gelé',
    redeemTime: 'Décongeler le temps',
    pledgeAmount: 'montant gelé',
    pledgeType: 'Type de gel:',
    redeemAmount: 'Dégeler le montant',
    cocosPrivate: 'Clé privée COCOS',
    property: 'étiquette',
    json: 'Json',
    contract: 'Contrat',
    operation: 'Opération',
    ptsite: 'Site：',
    ptaddress: 'À：',
    ptamount: 'Valeur：',
    ptcontract: 'Contrat：',
    ptpayment: 'Paiement：',
    pttype: 'Type：',
    param: 'paramètres',
    memo: 'Mémo',
    charge: 'Frais',
    nhTitle: 'Transferts d\'actif NH',
    nhId: 'Coin:',
    worldView: 'Nom du multivers:',
    id: '资产id:',
    world: '世界观:',
    nhData: 'NH资产数据data:',
    nhUser: 'NH资产拥有者:',
    nhNum: 'NH资产数量:',
    type: 'Type:',
    nhAssets: '批量创建不同资:',
    itemlds: 'itemlds:',
    tpType: '类型:',
    tpId: '账号ID:',
    tpNum: '票数:'
  },
  // settings
  settings: {
    network: 'Réseau',
    whiteList: 'Liste blanche',
    language: 'Langue',
    modifyPassword: 'Mot de passe',
    lockSetting: 'Réglage de verrouillage',
    about: 'À propos',
    lock: 'Verrouillage'
  },
  // unit
  unit: {
    minute: 'minutes'
  },
  type: {
    bandWidth: 'Point de largeur de bande',
    energy: 'Énergie'
  },
  other: {
    never: 'jamais'
  },
  networkName: {
    MainNet: 'Réseau principal',
    TestNet: 'Réseau de test',
    PrivateNet: 'Réseau privé'
  },
  error: {
    '-11': 'Veuillez vous connecter en premier',
    0: 'échec',
    101: 'Le paramètre est manquant',
    1011: 'Erreur de paramètre',
    102: 'Le réseau est occupé, vérifiez votre connexion au réseau',
    103: 'Veuillez saisir le nom du compte correctement (lettres minuscules commencent par 5 chiffres ou plus)',
    104: 'Introuvable',
    105: 'mot de passe incorrect',
    106: 'Le compte est déjà débloqué',
    107: 'S\'il vous plaît importer la clé privée',
    108: 'Erreur de nom d\'utilisateur ou de mot de passe',
    109: 'S\'il vous plaît entrer la clé privée correctement',
    110: 'La clé privée n\'a pas d\'informations sur le compte',
    111: 'Veuillez vous connecter en premier',
    112: 'Vous devez avoir l\'autorisation de la clé privé propriétaire pour modifier le mot de passe. Veuillez confirmer que vous avez importé la clé privé propriétaire',
    113: 'Veuillez entrer le mot de passe original / temporaire correctement',
    114: 'Le compte est verrouillé ou n\'est pas connecté',
    115: 'Il n\'y a pas d\'actif XX sur la chaîne de blocs',
    116: 'La créance n\'existe pas',
    117: 'La décimale ne peut pas dépasser la précision de l\'actif actuel',
    118: 'Le cryptage du mémo a échoué',
    119: 'Expiration de la transaction',
    120: 'Erreur lors de la récupération de l\'information du compte',
    121: 'informations de blocage et de transaction introuvables',
    122: 'Le paramètre blockOrTXID est incorrect',
    123: 'Le compte paramètre ne peut pas être vide',
    124: 'Le nom du compte client ne peut pas être vide',
    125: 'Les utilisateurs ne possèdent pas cet actifs',
    127: 'Pas de récompense disponible',
    129: 'Le mémo du paramètre ne peut pas être vide',
    130: 'Entrez le nom du contrat correct (lettres minuscules commencent par 6 chiffres ou plus)',
    131: 'Parameter worldView ne peut pas être vide',
    133: 'Le paramètre toAccount ne peut pas être vide',
    135: 'Veuillez vérifier le type de données du paramètre',
    136: 'Le paramètre orderId ne peut pas être vide',
    137: 'Le paramètre NHAssetHashOrIds ne peut pas être vide',
    138: 'L\'URL du paramètre ne peut pas être vide',
    139: 'L\'adresse du noeud doit commencer par ws: // ou wss: //',
    140: 'L\'adresse du noeud du serveur d\'API existe déjà',
    141: 'Veuillez vérifier les données dans le paramètre NHAssets',
    142: 'Veuillez vérifier le type de données du paramètre NHAssets',
    144: 'Votre création / suppression / transfert de lot en cours ne peut pas dépasser les opérations par lot',
    145: 'Contrat non trouvé',
    146: 'Le compte ne contient pas d\'informations sur le contrat',
    147: 'NHAsset n\'existe pas',
    148: 'Délai de requête dépassé, essayez de déverrouiller le compte ou de vous connecter au compte',
    149: 'Ce portefeuille a déjà été importé',
    150: 'Erreur d\'importation de clé',
    151: 'L\'enregistrement de fichier n\'est pas supporté',
    152: 'Sauvegarde invalide pour télécharger la conversion',
    153: 'S\'il vous plaît déverrouillez votre portefeuille en premier',
    154: 'S\'il vous plaît restaurer votre portefeuille en premier',
    155: 'Votre navigateur peut ne pas prendre en charge la récupération de fichiers du portefeuille',
    156: 'Le portefeuille a été importé. Ne pas répéter l\'importation ',
    157: 'Impossible de supprimer le portefeuille, il n\'existe pas dans l\'index',
    158: 'Erreur des actifs principaux du portefeuille',
    159: 'Le compte existe',
    160: 'La clé privée a été importée dans le portefeuille',
    161: 'Les commandes n\'existent pas',
    162: 'Le bien existe déjà',
    163: 'Le portefeuille existe déjà. S\'il vous plaît essayez d\'importer la clé privée ',
    164: 'Les visions du monde n\'existent pas',
    165: 'Il n\'y a pas d\'informations de compte dans la chaîne',
    166: 'L\'ID de la chaîne du portefeuille ne correspond pas aux informations de configuration de la chaîne en cours',
    167: 'La version actuelle du contrat n\'a pas été trouvée',
    168: 'Cet abonnement n\'existe pas',
    169: 'La méthode n\'existe pas',
    300: 'Erreur de synchronisation de la chaîne, veuillez vérifier l\'horloge de votre système',
    301: 'La connexion RPC a échoué. S\'il vous plaît vérifier votre réseau '
  }
}
